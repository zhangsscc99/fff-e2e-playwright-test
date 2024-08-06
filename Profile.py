import zipfile
import os

def unzip_file_to_multiple_directories(zip_path, base_extract_path, folder_names):
    """
    解压缩文件到多个指定目录
    """
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        for folder_name in folder_names:
            extract_to = os.path.join(base_extract_path, folder_name)
            os.makedirs(extract_to, exist_ok=True)
            zip_ref.extractall(extract_to)
            print(f"解压完成：{zip_path} -> {extract_to}")

if __name__ == "__main__":
    zip_file_path = '/home/zhangsscc99/fff-e2e-framework/fff-e2e/assets/Profile.zip'
    base_extract_path = os.path.dirname(zip_file_path)
    
    # 可编辑的文件夹名称列表
    folder_names = [
        'Profile_1',
        'Profile_2',
        'Profile_3'
    ]

    # 解压缩文件到多个文件夹
    unzip_file_to_multiple_directories(zip_file_path, base_extract_path, folder_names)
