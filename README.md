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

# browserslist

- Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file(package.json). It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
- Let's see each individual query added in package.json file:
  1. 0.2%: All browsers that have at least 0.2% of global market share
  2. not dead: Exclude browsers without official support in the last 24 months
  3. not ie <= 11: Exclude IE 11 and older versions
  4. not op_mini all: Exclude Opera Mini

# UseEffect

- if the dependency array in not present - useEffect is called in every render
- if the dependency array is empty then its called in initial render(just once)
- if the dipendency is filled with any reactive value (props, state, object and function) the its called on dependency changes

# 2-Types of Routing

- Server side
- client side
