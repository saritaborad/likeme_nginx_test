# #!/bin/bash

# # Set the deployment directory on the server
# deploy_host="pikso.in"
# deploy_path="/var/www/html/likeme_test"
# deploy_dir="$deploy_host:$deploy_path"
# ssh_key_path="$HOME/.ssh/id_rsa"  # Adjust the path based on your actual key location

# # Save the 'uploads' folder path
# uploads_folder="$deploy_path/backend/uploads"

# # Ensure correct permissions for the SSH key
# chmod 600 $ssh_key_path 

# # Check if the 'uploads' folder exists on the server/
# # ssh -i $ssh_key_path root@$deploy_host "[ -d $uploads_folder ]"
# # if [ $? -eq 0 ]; then
# #   # If it exists, move it to a temporary location
# #   ssh -i $ssh_key_path root@$deploy_host "mv $uploads_folder $deploy_path/uploads_temp"
# # fi

# # Pull the latest changes from the remote repository (assuming the branch is 'master')
# git fetch origin master

# # # Copy only the changed files to the server for backend
# rsync -avz --exclude 'uploads/' -e "ssh -i $ssh_key_path" backend/ root@$deploy_dir/backend

# # rsync -avz -e "ssh -i $ssh_key_path" backend/ root@$deploy_dir/backend

# rsync -avz -e "ssh -i $ssh_key_path"  frontend/build/ root@$deploy_dir

# ssh -i $ssh_key_path root@$deploy_host "cd $deploy_path/backend && npm install --legacy-peer-deps && /usr/local/bin/pm2 restart likeme_test"


# # ssh -i $ssh_key_path root@$deploy_host "[ -d $deploy_path/uploads_temp ]"
# # if [ $? -eq 0 ]; then
# #   # If it was moved, restore it to its original location
# #   ssh -i $ssh_key_path root@$deploy_host "mv $deploy_path/uploads_temp $uploads_folder"
# # fi
# # ssh -i $ssh_key_path root@$deploy_host "rm -r $deploy_path/backend/build"

