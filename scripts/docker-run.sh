frontend="vuttr_frontend"
container_frontend=`docker container ls -a --filter name=$frontend -q`
if [ ${#container_frontend} -gt 0 ]
then
  docker container stop $container_frontend || true
  echo "$container_frontend stopped!"
fi

docker run -d \
    --rm=true \
    -p 3001:80 \
    --name $frontend \
    vuttr:frontend

echo "Running container $frontend"
