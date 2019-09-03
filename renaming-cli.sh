#!/bin/bash
set -e

if [ -z "$1" ]
  then
    echo "⛔️ No name supplied"
    exit 1
fi

NAME=$1
echo "✅ Getting name successfully"

sed -i.bak "/system.run/s/cli-starter/${NAME}/g" ./__tests__/cli-integration.test.ts
sed -i.bak "/brand/s/cli-starter/${NAME}/g" ./src/cli.ts
sed -i.bak "/name:/s/cli-starter/${NAME}/g" ./src/commands/cli-starter.ts
sed -i.bak "/return/s/cli-starter/${NAME}/g" ./src/commands/cli-starter.ts
sed -i.bak "14s/cli-starter/${NAME}/" ./package.json
sed -i.bak "14s/cli-starter/${NAME}/" ./package.json
echo "✅ Changing name in files successfully"

mv ./src/commands/cli-starter.ts ./src/commands/$NAME.ts
mv ./bin/cli-starter ./bin/$NAME
echo "✅ Renaming files successfully"

npm link
echo "✅ Linking successfully"

npm run build
echo "✅ Build successfully"

echo "Renaming CLI finished 🎉"
rm ./renaming-cli.sh