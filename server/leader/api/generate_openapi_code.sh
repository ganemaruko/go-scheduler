# ! Please run this shell file in wsl.
docker run --rm \
    -v "${PWD}:/local" \
    -v "${PWD}/openapi:/usr/openapi" \
    openapitools/openapi-generator-cli generate \
    -i /usr/openapi/main/openapi.yml \
    -g go-echo-server -o /local \
    -t /usr/openapi/template \
    --git-repo-id go-scheduler \
    --git-user-id ganemaruko