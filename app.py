from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    movie_data = None
    if request.method == 'POST':
        genre = request.form.get('genre', '').lower()
        movies = {
            'action': {
                'title': 'Mad Max: Fury Road',
                'poster': 'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
                'description': 'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant and his army.',
                'rating': 8.1,
                'imdb': 'https://www.imdb.com/?ref_=tt_nv_home'
            },
            'sci-fi': {
                'title': 'The Matrix',
                'poster': 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
                'description': 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
                'rating': 8.7,
                'imdb': 'https://www.imdb.com/?ref_=tt_nv_home'
            },
            'drama': {
                'title': 'The Social Network',
                'poster': 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg',
                'description': 'The story of the founding of Facebook and the lawsuits that followed.',
                'rating': 7.7,
                'imdb': 'https://www.imdb.com/?ref_=tt_nv_home'
            },
            'comedy': {
                'title': 'The Grand Budapest Hotel',
                'poster': 'https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg',
                'description': 'A whimsical tale of a legendary concierge at a famous hotel and his adventures.',
                'rating': 8.1,
                'imdb': 'https://www.imdb.com/?ref_=tt_nv_home'
            }
        }
        if genre in movies:
            movie_data = movies[genre]
        else:
            movie_data = {
                'title': 'No recommendation',
                'poster': '',
                'description': 'Sorry, no recommendations for that genre.',
                'rating': '',
                'imdb': 'https://www.imdb.com/?ref_=tt_nv_home'
            }
    return render_template('index.html', movie=movie_data)

if __name__ == '__main__':
    app.run(debug=True)
