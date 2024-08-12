import requests

def fetch_api_data():
    try:
        response = requests.get('http://localhost:3000/api-data')  # Ensure the server is running
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None

def process_data(data):
    # Implement your data processing logic here
    # Example: Print the data
    print(data)

# Method to fetch car data from a particular race from specified racer
def get_race_info():
    print("yo")


# Method to fetch weather inforation from a particular race activity
def get_weather_data():
    try:
        response = requests.get('http://localhost:3000/weather-data')  # Ensure the server is running
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        return None

if __name__ == "__main__":
    api_data = get_weather_data()
    if api_data:
        process_data(api_data)




