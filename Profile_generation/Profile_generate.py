import os
import shutil

# 原始用户数据目录
user_data_dir = "/home/zhangsscc99/fff-e2e-framework/fff-e2e/assets/Standard_User_Data"

# 目标目录和名称
target_profiles = ['Profile 88', 'Profile 89', 'Profile 90', 'Profile 91', 'Profile 92']

def copy_directory(src, dest):
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(src, dest)

for profile in target_profiles:
    target_dir = os.path.join("/home/zhangsscc99/fff-e2e-framework/fff-e2e/assets", profile)
    
    try:
        copy_directory(user_data_dir, target_dir)
        print(f"{profile} has been copied successfully.")
    except Exception as e:
        print(f"Failed to copy {profile}: {e}")
