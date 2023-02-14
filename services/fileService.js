const { BlobServiceClient } = require("@azure/storage-blob");

const containerName = "image";
const connStr = "DefaultEndpointsProtocol=https;AccountName=rmad101codeacademy;AccountKey=ecyKdstCSD0Oybxuoi68ar690Ih/gsQyhnd3TPlmgKJx2ewrgXZ0ioSdFBlvUtGY3H7E9uUidzOR+AStpGvGlg==;EndpointSuffix=core.windows.net";
const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
const containerClient = blobServiceClient.getContainerClient(containerName);

const fileUpload = async (files) => {
    let result = [];
    for (let i = 0; i < files.length; i++) {
        let fileName = new Date().toLocaleString().replace(' ','') + new Date().getMilliseconds() + files[i].name;
        const blockBlobClient = containerClient.getBlockBlobClient(fileName);
        result.push(`https://rmad101codeacademy.blob.core.windows.net/${containerName}/${fileName}`)   
        const uploadBlobResponse = await blockBlobClient.upload(files[i].data, files[i].size);
    }
    return result;
}

module.exports = {
    fileUpload: fileUpload
}