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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet5570/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8042/subnets?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestSubnet1241\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet5570/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8042/subnets/xplatTestSubnet1241\",\r\n      \"etag\": \"W/\\\"3ac019b2-7a35-4611-b24a-acddaca2df8e\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/24\",\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet5570/providers/Microsoft.Network/networkSecurityGroups/undefined\"\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '690',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cb06a319-8b36-4037-af8d-6dc83a9308c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31933',
  'x-ms-correlation-request-id': 'de105ac6-b986-4fe3-a900-250a4f85e045',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111639Z:de105ac6-b986-4fe3-a900-250a4f85e045',
  date: 'Mon, 27 Apr 2015 11:16:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet5570/providers/Microsoft.Network/virtualnetworks/xplatTestVnet8042/subnets?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatTestSubnet1241\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet5570/providers/Microsoft.Network/virtualNetworks/xplatTestVnet8042/subnets/xplatTestSubnet1241\",\r\n      \"etag\": \"W/\\\"3ac019b2-7a35-4611-b24a-acddaca2df8e\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"10.0.0.0/24\",\r\n        \"networkSecurityGroup\": {\r\n          \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet5570/providers/Microsoft.Network/networkSecurityGroups/undefined\"\r\n        }\r\n      }\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '690',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cb06a319-8b36-4037-af8d-6dc83a9308c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31933',
  'x-ms-correlation-request-id': 'de105ac6-b986-4fe3-a900-250a4f85e045',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111639Z:de105ac6-b986-4fe3-a900-250a4f85e045',
  date: 'Mon, 27 Apr 2015 11:16:39 GMT',
  connection: 'close' });
 return result; }]];