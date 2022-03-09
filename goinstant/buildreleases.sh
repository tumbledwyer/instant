version=$1
echo $version
GOOS=darwin GOARCH=amd64 go build -ldflags="-X 'goinstant.BuildVersion=$version'" && mv ./goinstant ./bin/goinstant-macos \
&& GOOS=linux GOARCH=amd64 go build -ldflags="-X 'goinstant.BuildVersion=$version'" && mv ./goinstant ./bin/goinstant-linux \
&& GOOS=windows GOARCH=amd64 go build -ldflags="-X 'goinstant.BuildVersion=$version'" && mv ./goinstant.exe ./bin/goinstant.exe \
&& go clean