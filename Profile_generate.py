import os
import shutil

# 原始用户数据目录
user_data_dir = "/home/zhangsscc99/fff-e2e-framework/fff-e2e/assets/Profile 1 backup"
user_data_dir2 = "/home/zhangsscc99/fff-e2e-framework/fff-e2e/assets/Standard_User_Data2"

# 目标目录和名称
target_profiles = ['Profile 10', 'Profile 11', 'Profile 12', 'Profile 13', 'Profile 14']
target_profiles2 = ['Profile 15', 'Profile 16', 'Profile 17', 'Profile 18', 'Profile 19']

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

for profile in target_profiles2:
    target_dir2 = os.path.join("/home/zhangsscc99/fff-e2e-framework/fff-e2e/assets", profile)
    
    try:
        # copy_directory(user_data_dir, target_dir)
        copy_directory(user_data_dir2, target_dir2)
        print(f"{profile} has been copied successfully.")
    except Exception as e:
        print(f"Failed to copy {profile}: {e}")
