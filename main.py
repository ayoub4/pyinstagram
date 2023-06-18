import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pyautogui

def locate_and_click(image_path):
    location = pyautogui.locateOnScreen(image_path)
    if location is not None:
        # Get the center coordinates of the image
        x, y, width, height = location
        center_x = x + width // 2
        center_y = y + height // 2

        # Click on the image
        pyautogui.click(center_x, center_y)
    else:
        print("Image not found on the screen.")

# Specify the link to navigate to
link_to_visit = "https://www.instagram.com/shein.morocco_/followers/"

# Path to the image
image_path = "plugin_logo.png"

# Path to the user profile directory
user_profile_path = "C:/Users/ayoub/AppData/Local/Google/Chrome/User Data/"

# XPath of the element to wait for
element_xpath = '/html/body/div[2]/div/div/div[2]/div/div/div[1]/div/div[2]/div/div/div'

# Create Chrome options and set the user profile directory
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
user_profile_name = "Default"
options.add_argument(f"--user-data-dir={user_profile_path}")
options.add_argument(f"--profile-directory={user_profile_name}")

# Create a Chrome WebDriver instance with the specified options
driver = webdriver.Chrome(options=options)

# Navigate to the link
driver.get(link_to_visit)

# Wait for the element to be present on the page
wait = WebDriverWait(driver, 10)
wait.until(EC.presence_of_element_located((By.XPATH, element_xpath)))

# Take a screenshot of the entire screen
screen_image = pyautogui.screenshot()

# Save the screenshot as a file
screenshot_path = "screenshot.png"
screen_image.save(screenshot_path)

# Locate and click the first image on the screen using PyAutoGUI
locate_and_click(image_path)

# Delay for 5 seconds
time.sleep(2)

# Path to the second image
second_image_path = "start.png"

# Locate and click the second image on the screen using PyAutoGUI
locate_and_click(second_image_path)

# Delay for 2 seconds
time.sleep(2)

# Keep the app running until interrupted
while True:
    time.sleep(1)

