appId=`az ad app create --display-name acmstest1 --password abcde12345 --credential-description master --required-resource-accesses @manifest.json --query "appId" --output tsv`
az ad app permission admin-consent --id ${appId}