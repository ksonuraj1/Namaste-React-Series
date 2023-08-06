# setting up ssh key command

- ssh-keygen -t rsa -b 4096 -C "Email Address"
- File in which to save the key : hit enter
- Enter passphrase: hit enter
- ls -a -l ~/.ssh (list of ssh key)
- eval $(ssh-agent -s) - it gives agent pid
- ssh-add ~/.ssh/id_rsa (identity added)
- cat ~/.ssh/id_rsa.pub

(it gives the ssh key , copy and go to the github repo and got to profile section in SSH and GPG Keys and open New SSH key and paste the key in key box and in title you can put Work laptop and anything you want)

# parcel

- Dev build
- local server
- HMR (Hot Module Replacement)
- File watching Algorithm - Written in c++
- Caching - fater builds
- Image optimization
- Minification
- Building
- Compressing the file
- Cositant Hashing
- Code Spliting
- Differential Bundling - older browser
- Eroor handling
- Https
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Browser list
