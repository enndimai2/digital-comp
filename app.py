from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    movie_data = None
    if request.method == 'POST':
        genre = request.form.get('genre', '').lower()
        language = request.form.get('language', '').lower()
        movies = {
            'action': [
                {
                    'title': 'Mad Max: Fury Road',
                    'poster': 'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
                    'trailer': 'https://www.youtube.com/embed/hEJnMQG9ev8',
                    'description': 'In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant and his army.',
                    'summary': 'A visually stunning, high-octane action film set in a desert wasteland where survival is a daily struggle.',
                    'cast': 'Tom Hardy, Charlize Theron, Nicholas Hoult',
                    'rating': 8.1,
                    'imdb': 'https://www.imdb.com/title/tt1392190/',
                    'language': 'en'
                },
                {
                    'title': 'John Wick',
                    'poster': 'https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg',
                    'trailer': 'https://www.youtube.com/embed/2AUmvWm5ZDQ',
                    'description': 'An ex-hitman comes out of retirement to track down the gangsters that killed his dog.',
                    'summary': 'Stylish, relentless action with Keanu Reeves as a legendary assassin.',
                    'cast': 'Keanu Reeves, Michael Nyqvist, Alfie Allen',
                    'rating': 7.4,
                    'imdb': 'https://www.imdb.com/title/tt2911666/',
                    'language': 'en'
                }
            ],
            'sci-fi': [
                {
                    'title': 'The Matrix',
                    'poster': 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
                    'trailer': 'https://www.youtube.com/embed/vKQi3bBA1y8',
                    'description': 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
                    'summary': 'A mind-bending sci-fi classic that questions reality and explores the power of human choice.',
                    'cast': 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
                    'rating': 8.7,
                    'imdb': 'https://www.imdb.com/title/tt0133093/',
                    'language': 'en'
                },
                {
                    'title': 'Inception',
                    'poster': 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
                    'trailer': 'https://www.youtube.com/embed/YoHD9XEInc0',
                    'description': 'A thief who steals corporate secrets through dream-sharing technology is given an impossible task.',
                    'summary': 'Dreams within dreams in a visually stunning thriller.',
                    'cast': 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
                    'rating': 8.8,
                    'imdb': 'https://www.imdb.com/title/tt1375666/',
                    'language': 'en'
                }
            ],
            'drama': [
                {
                    'title': 'The Social Network',
                    'poster': 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg',
                    'trailer': 'https://www.youtube.com/embed/lB95KLmpLR4',
                    'description': 'The story of the founding of Facebook and the lawsuits that followed.',
                    'summary': 'A gripping drama about ambition, friendship, and betrayal in the digital age.',
                    'cast': 'Jesse Eisenberg, Andrew Garfield, Justin Timberlake',
                    'rating': 7.7,
                    'imdb': 'https://www.imdb.com/title/tt1285016/',
                    'language': 'en'
                },
                {
                    'title': 'Forrest Gump',
                    'poster': 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
                    'trailer': 'https://www.youtube.com/embed/bLvqoHBptjg',
                    'description': 'The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of Forrest Gump.',
                    'summary': 'A heartwarming story of an extraordinary man in ordinary times.',
                    'cast': 'Tom Hanks, Robin Wright, Gary Sinise',
                    'rating': 8.8,
                    'imdb': 'https://www.imdb.com/title/tt0109830/',
                    'language': 'en'
                }
            ],
            'comedy': [
                {
                    'title': 'The Grand Budapest Hotel',
                    'poster': 'https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg',
                    'trailer': 'https://www.youtube.com/embed/1Fg5iWmQjwk',
                    'description': 'A whimsical tale of a legendary concierge at a famous hotel and his adventures.',
                    'summary': 'A colorful and quirky comedy set in a luxurious European hotel between the wars.',
                    'cast': 'Ralph Fiennes, Tony Revolori, Saoirse Ronan',
                    'rating': 8.1,
                    'imdb': 'https://www.imdb.com/title/tt2278388/',
                    'language': 'en'
                },
                {
                    'title': 'Superbad',
                    'poster': 'https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg',
                    'trailer': 'https://www.youtube.com/embed/4eaZ_48ZYog',
                    'description': 'Two co-dependent high school seniors are forced to deal with separation anxiety.',
                    'summary': 'A hilarious coming-of-age teen comedy.',
                    'cast': 'Jonah Hill, Michael Cera, Christopher Mintz-Plasse',
                    'rating': 7.6,
                    'imdb': 'https://www.imdb.com/title/tt0829482/',
                    'language': 'en'
                }
            ],
            'anime': [
                {
                    'title': 'Spirited Away',
                    'poster': 'https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg',
                    'trailer': 'https://www.youtube.com/embed/ByXuk9QqQkk',
                    'description': 'A young girl enters a world of spirits and must find her way home.',
                    'summary': 'A magical coming-of-age adventure from Studio Ghibli.',
                    'cast': 'Rumi Hiiragi, Miyu Irino, Mari Natsuki',
                    'rating': 8.6,
                    'imdb': 'https://www.imdb.com/title/tt0245429/',
                    'language': 'ja'
                },
                {
                    'title': 'Your Name',
                    'poster': 'https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg',
                    'trailer': 'https://www.youtube.com/embed/3KR8_igDs1Y',
                    'description': 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies.',
                    'summary': 'A beautiful, emotional anime romance.',
                    'cast': 'Ryunosuke Kamiki, Mone Kamishiraishi',
                    'rating': 8.4,
                    'imdb': 'https://www.imdb.com/title/tt5311514/',
                    'language': 'ja'
                }
            ],
            'tvshow': [
                {
                    'title': 'Breaking Bad',
                    'poster': 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
                    'trailer': 'https://www.youtube.com/embed/HhesaQXLuRY',
                    'description': 'A chemistry teacher turned meth producer.',
                    'summary': 'A gripping crime drama about transformation and consequences.',
                    'cast': 'Bryan Cranston, Aaron Paul, Anna Gunn',
                    'rating': 9.5,
                    'imdb': 'https://www.imdb.com/title/tt0903747/',
                    'language': 'en'
                },
                {
                    'title': 'Money Heist',
                    'poster': 'https://image.tmdb.org/t/p/w500/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg',
                    'trailer': 'https://www.youtube.com/embed/p_PJbmrX4uk',
                    'description': 'A criminal mastermind plans the biggest heist in history.',
                    'summary': 'Spanish crime drama with twists and turns.',
                    'cast': 'Úrsula Corberó, Álvaro Morte, Itziar Ituño',
                    'rating': 8.2,
                    'imdb': 'https://www.imdb.com/title/tt6468322/',
                    'language': 'es'
                }
            ]
        }
        if genre in movies:
            filtered = [m for m in movies[genre] if m.get('language', 'en').lower() == language] if language and language != 'other' else movies[genre]
            if filtered:
                movie_data = random.choice(filtered)
            else:
                movie_data = random.choice(movies[genre])
        else:
            movie_data = {
                'title': 'No recommendation',
                'poster': '',
                'trailer': '',
                'description': 'Sorry, no recommendations for that genre.',
                'summary': '',
                'cast': '',
                'rating': '',
                'imdb': 'https://www.imdb.com/?ref_=tt_nv_home'
            }
    return render_template('index.html', movie=movie_data)

if __name__ == '__main__':
    app.run(debug=True)
