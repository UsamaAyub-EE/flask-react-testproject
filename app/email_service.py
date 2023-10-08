import smtplib
from email.mime.text import MIMEText
from app.config.secrets import EMAIL_ADDRESS, EMAIL_PASSWORD, TO_EMAIL

def send_temperature_alert(temperature):
    subject = 'Temperature Alert'
    message = f'Temperature is {temperature}°F, exceeding 90°F threshold!'

    msg = MIMEText(message)
    msg['Subject'] = subject
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = TO_EMAIL

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
    server.sendmail(EMAIL_ADDRESS, TO_EMAIL, msg.as_string())
    server.quit()
