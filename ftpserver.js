var ftpd=require('ftp-server')
ftpd.fsOptions.root='/Users/pierre/Downloads'
ftpd.listen(10021)
