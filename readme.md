docker p its not working sahe s bcz of email service m wo set kar dnga agar solution milta h to 


local p wese its working fine 


to run locally:

go to root directory i.e testproject
run command: pip install -r requirements.txt
and then run: python run.py


yaa phr envn bna k karna to : 
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask run
### this venv wale approach is better wese 




##for docker p run karne k lie jo abe run nae ho raha :33333
start your docker desktop and then:
docker build -t weather-app .
docker run -p 5000:5000 weather-app

