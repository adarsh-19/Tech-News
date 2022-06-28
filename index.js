fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2f7be9e175564ff8b1f02a9067fdf0cc')
    .then(data => data.json())
    .then(jokeData => {     
        try
        {
               
          let today = new Date();
          let x=today.getSeconds();
          let jokeText = jokeData.articles[x%20].title;
          let jokeElement = document.getElementById('jokeElement');
          // x++;
          jokeElement.innerHTML = jokeText;
        }
        catch(err)
        {
             throw(err);
        }
        
    })