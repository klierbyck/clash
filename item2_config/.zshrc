# 1.安装oh-my-zsh
# sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 2.安装并在item2中设置字体fira-code
# brew install font-fira-code --cask

# 3.下载双击Snazzy.itermcolors安装并在item2中设置Snazzy配色

# 4.自动到达路径
# brew install autojump

# 5.模糊查找
# git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
# ~/.fzf/install

# 6.自动补全
# git clone https://github.com/zsh-users/zsh-autosuggestions.git "$ZSH/custom/plugins/zsh-autosuggestions"

# 7.语法高亮
# git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "$ZSH/custom/plugins/zsh-syntax-highlighting"

# 8.下载主题spaceship
# git clone https://github.com/spaceship-prompt/spaceship-prompt.git "$ZSH/custom/themes/spaceship-prompt" --depth=1
# ln -s "$ZSH/custom/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH/custom/themes/spaceship.zsh-theme"

# oh-my-zsh配置开始
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="spaceship"

SPACESHIP_USER_SHOW="false"
SPACESHIP_USER_COLOR="212"
SPACESHIP_HOST_SHOW="false"
SPACESHIP_NODE_SHOW=false

SPACESHIP_DIR_SHOW="true"
SPACESHIP_DIR_TRUNC=0          # 显示完整路径，不截断
SPACESHIP_DIR_TRUNC_REPO=false # 不在 Git 仓库中截断
SPACESHIP_DIR_COLOR="blue"
SPACESHIP_DIR_PREFIX="in "
SPACESHIP_DIR_SUFFIX=" "

SPACESHIP_TIME_SHOW="true"
SPACESHIP_TIME_FORMAT="%T"
SPACESHIP_TIME_COLOR="yellow"

SPACESHIP_GIT_SHOW="true"
SPACESHIP_GIT_BRANCH_COLOR="green"

plugins=(git autojump zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh
# oh-my-zsh配结束

# pyenv环境变量配置
export PATH="$HOME/.pyenv/bin:$HOME/.pyenv/shims:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"