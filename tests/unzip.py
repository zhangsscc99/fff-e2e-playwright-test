import os
import shutil
from zipfile import ZipFile

def unzip_and_overwrite(zip_path, extract_to_path):
    try:
        # Check if the directory already exists and remove it
        if os.path.exists(extract_to_path):
            shutil.rmtree(extract_to_path)
            print(f"Removed existing directory: {extract_to_path}")

        # Ensure the directory exists
        os.makedirs(extract_to_path, exist_ok=True)

        # Unzip the file
        with ZipFile(zip_path, 'r') as zip_ref:
            zip_ref.extractall(extract_to_path)

        print(f"Extracted to {extract_to_path}")
    except Exception as e:
        print(f"Error during unzipping: {e}")

zip_file_path = 'assets/Profile.zip'
extract_to_path = 'assets/Profile_test'

unzip_and_overwrite(zip_file_path, extract_to_path)

# import os
# import shutil
# from zipfile import ZipFile

# def unzip_and_overwrite(zip_path, extract_to_path):
#     try:
#         # Check if the directory already exists
#         if os.path.exists(extract_to_path):
#             # Print a message before removing the directory
#             print(f"Directory {extract_to_path} already exists. It will be removed.")
#             # Remove the existing directory
#             shutil.rmtree(extract_to_path)
#             print(f"Removed existing directory: {extract_to_path}")

#         # Ensure the directory exists
#         os.makedirs(extract_to_path, exist_ok=True)

#         # Unzip the file
#         with ZipFile(zip_path, 'r') as zip_ref:
#             zip_ref.extractall(extract_to_path)

#         print(f"Extracted to {extract_to_path}")
#     except Exception as e:
#         print(f"Error during unzipping: {e}")

# zip_file_path = 'assets/Profile.zip'
# extract_to_path = 'assets/Profile_test'

# unzip_and_overwrite(zip_file_path, extract_to_path)
