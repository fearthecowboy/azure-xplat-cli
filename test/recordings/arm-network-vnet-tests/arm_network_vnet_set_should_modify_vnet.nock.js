// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8041?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet8041\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8041\",\r\n  \"etag\": \"W/\\\"3a9cfd05-d376-4dc9-831b-38abb1214710\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '582',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3a9cfd05-d376-4dc9-831b-38abb1214710"',
  'x-ms-request-id': '6ac6530d-859b-4c30-87eb-8b8e565dca02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31934',
  'x-ms-correlation-request-id': '95c4bbac-dea5-43a6-878d-3ec25d6c0608',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111445Z:95c4bbac-dea5-43a6-878d-3ec25d6c0608',
  date: 'Mon, 27 Apr 2015 11:14:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8041?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet8041\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8041\",\r\n  \"etag\": \"W/\\\"3a9cfd05-d376-4dc9-831b-38abb1214710\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"priority\": \"low\",\r\n    \"size\": \"small\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '582',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3a9cfd05-d376-4dc9-831b-38abb1214710"',
  'x-ms-request-id': '6ac6530d-859b-4c30-87eb-8b8e565dca02',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31934',
  'x-ms-correlation-request-id': '95c4bbac-dea5-43a6-878d-3ec25d6c0608',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111445Z:95c4bbac-dea5-43a6-878d-3ec25d6c0608',
  date: 'Mon, 27 Apr 2015 11:14:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8041?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet8041\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8041\",\r\n  \"etag\": \"W/\\\"a4eceb4b-9494-4e11-b19d-b6968f073ba3\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '537',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '9c79dabc-af75-4654-b0a0-0de4b669bd2a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/9c79dabc-af75-4654-b0a0-0de4b669bd2a?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': 'db7c8e11-4516-4253-8ef3-96ce48731b9e',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111450Z:db7c8e11-4516-4253-8ef3-96ce48731b9e',
  date: 'Mon, 27 Apr 2015 11:14:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8041?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet8041\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8041\",\r\n  \"etag\": \"W/\\\"a4eceb4b-9494-4e11-b19d-b6968f073ba3\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '537',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '9c79dabc-af75-4654-b0a0-0de4b669bd2a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/9c79dabc-af75-4654-b0a0-0de4b669bd2a?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': 'db7c8e11-4516-4253-8ef3-96ce48731b9e',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111450Z:db7c8e11-4516-4253-8ef3-96ce48731b9e',
  date: 'Mon, 27 Apr 2015 11:14:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/9c79dabc-af75-4654-b0a0-0de4b669bd2a?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '71e170a9-c619-4644-aefe-bc7f8d2175c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31927',
  'x-ms-correlation-request-id': 'bed995f6-89ba-4b8f-b79a-05167a573763',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111501Z:bed995f6-89ba-4b8f-b79a-05167a573763',
  date: 'Mon, 27 Apr 2015 11:15:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/9c79dabc-af75-4654-b0a0-0de4b669bd2a?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '71e170a9-c619-4644-aefe-bc7f8d2175c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31927',
  'x-ms-correlation-request-id': 'bed995f6-89ba-4b8f-b79a-05167a573763',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111501Z:bed995f6-89ba-4b8f-b79a-05167a573763',
  date: 'Mon, 27 Apr 2015 11:15:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8041?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet8041\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8041\",\r\n  \"etag\": \"W/\\\"1a91d73b-0056-4944-aa9f-91872372962e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '538',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1a91d73b-0056-4944-aa9f-91872372962e"',
  'x-ms-request-id': 'cddc82ca-be67-46df-b63f-96eec144d224',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31924',
  'x-ms-correlation-request-id': '3577c11c-b443-424e-b625-7c019a02aafd',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111502Z:3577c11c-b443-424e-b625-7c019a02aafd',
  date: 'Mon, 27 Apr 2015 11:15:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8041?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestVnet8041\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatevnet9369/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8041\",\r\n  \"etag\": \"W/\\\"1a91d73b-0056-4944-aa9f-91872372962e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/12\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"8.8.8.8\",\r\n        \"8.8.4.4\"\r\n      ]\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '538',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1a91d73b-0056-4944-aa9f-91872372962e"',
  'x-ms-request-id': 'cddc82ca-be67-46df-b63f-96eec144d224',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31924',
  'x-ms-correlation-request-id': '3577c11c-b443-424e-b625-7c019a02aafd',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111502Z:3577c11c-b443-424e-b625-7c019a02aafd',
  date: 'Mon, 27 Apr 2015 11:15:01 GMT',
  connection: 'close' });
 return result; }]];