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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg1913\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913\",\r\n  \"etag\": \"W/\\\"b930cb5d-402a-41f6-a60e-5830aa70e277\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"xplatTestNsgRule7272\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/securityRules/xplatTestNsgRule7272\",\r\n        \"etag\": \"W/\\\"b930cb5d-402a-41f6-a60e-5830aa70e277\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"sourcePortRange\": \"200\",\r\n          \"destinationPortRange\": \"250\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 250,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowVnetInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/DenyAllInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/DenyAllOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5433',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b930cb5d-402a-41f6-a60e-5830aa70e277"',
  'x-ms-request-id': '60ff410d-8691-4bb6-ba6c-7030c6fdef81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31955',
  'x-ms-correlation-request-id': '0d36081e-1806-435a-bdbc-3edd035842a6',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090756Z:0d36081e-1806-435a-bdbc-3edd035842a6',
  date: 'Mon, 27 Apr 2015 09:07:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg1913\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913\",\r\n  \"etag\": \"W/\\\"b930cb5d-402a-41f6-a60e-5830aa70e277\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"xplatTestNsgRule7272\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/securityRules/xplatTestNsgRule7272\",\r\n        \"etag\": \"W/\\\"b930cb5d-402a-41f6-a60e-5830aa70e277\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"sourcePortRange\": \"200\",\r\n          \"destinationPortRange\": \"250\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 250,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowVnetInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/DenyAllInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/DenyAllOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5433',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b930cb5d-402a-41f6-a60e-5830aa70e277"',
  'x-ms-request-id': '60ff410d-8691-4bb6-ba6c-7030c6fdef81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31955',
  'x-ms-correlation-request-id': '0d36081e-1806-435a-bdbc-3edd035842a6',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090756Z:0d36081e-1806-435a-bdbc-3edd035842a6',
  date: 'Mon, 27 Apr 2015 09:07:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/securityRules/xplatTestNsgRule7272?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsgRule7272\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/securityRules/xplatTestNsgRule7272\",\r\n  \"etag\": \"W/\\\"29326915-3cf7-4042-8438-9d9f67374547\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"200\",\r\n    \"destinationPortRange\": \"250\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n    \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 250,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '618',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '79552412-acae-49c0-b918-f20cd0195e8c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/79552412-acae-49c0-b918-f20cd0195e8c?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': '6281de0a-b669-46a0-9eee-693a5f803e37',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090757Z:6281de0a-b669-46a0-9eee-693a5f803e37',
  date: 'Mon, 27 Apr 2015 09:07:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/securityRules/xplatTestNsgRule7272?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsgRule7272\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/securityRules/xplatTestNsgRule7272\",\r\n  \"etag\": \"W/\\\"29326915-3cf7-4042-8438-9d9f67374547\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"Tcp\",\r\n    \"sourcePortRange\": \"200\",\r\n    \"destinationPortRange\": \"250\",\r\n    \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n    \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 250,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '618',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '79552412-acae-49c0-b918-f20cd0195e8c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/79552412-acae-49c0-b918-f20cd0195e8c?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': '6281de0a-b669-46a0-9eee-693a5f803e37',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090757Z:6281de0a-b669-46a0-9eee-693a5f803e37',
  date: 'Mon, 27 Apr 2015 09:07:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/79552412-acae-49c0-b918-f20cd0195e8c?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5ca6a07e-fcfe-4cf4-b71d-092e24d3400f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31965',
  'x-ms-correlation-request-id': '8bdbfea7-401c-4774-bd5f-5931cee61ebc',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090758Z:8bdbfea7-401c-4774-bd5f-5931cee61ebc',
  date: 'Mon, 27 Apr 2015 09:07:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/79552412-acae-49c0-b918-f20cd0195e8c?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5ca6a07e-fcfe-4cf4-b71d-092e24d3400f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31965',
  'x-ms-correlation-request-id': '8bdbfea7-401c-4774-bd5f-5931cee61ebc',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090758Z:8bdbfea7-401c-4774-bd5f-5931cee61ebc',
  date: 'Mon, 27 Apr 2015 09:07:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg1913\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913\",\r\n  \"etag\": \"W/\\\"29326915-3cf7-4042-8438-9d9f67374547\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"xplatTestNsgRule7272\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/securityRules/xplatTestNsgRule7272\",\r\n        \"etag\": \"W/\\\"29326915-3cf7-4042-8438-9d9f67374547\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"sourcePortRange\": \"200\",\r\n          \"destinationPortRange\": \"250\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 250,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowVnetInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/DenyAllInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/DenyAllOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5433',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"29326915-3cf7-4042-8438-9d9f67374547"',
  'x-ms-request-id': '6e5e6025-92a6-4f1e-a168-31aa1695d3af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31935',
  'x-ms-correlation-request-id': '02d035e2-7619-4d8a-9584-c2e7e45187dd',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090759Z:02d035e2-7619-4d8a-9584-c2e7e45187dd',
  date: 'Mon, 27 Apr 2015 09:07:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestNsg1913\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913\",\r\n  \"etag\": \"W/\\\"29326915-3cf7-4042-8438-9d9f67374547\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"securityRules\": [\r\n      {\r\n        \"name\": \"xplatTestNsgRule7272\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/securityRules/xplatTestNsgRule7272\",\r\n        \"etag\": \"W/\\\"29326915-3cf7-4042-8438-9d9f67374547\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"sourcePortRange\": \"200\",\r\n          \"destinationPortRange\": \"250\",\r\n          \"sourceAddressPrefix\": \"10.0.0.0/24\",\r\n          \"destinationAddressPrefix\": \"10.0.0.0/12\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 250,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      }\r\n    ],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowVnetInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/DenyAllInBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatGroupNsgRule9904/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg1913/defaultSecurityRules/DenyAllOutBound\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5433',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"29326915-3cf7-4042-8438-9d9f67374547"',
  'x-ms-request-id': '6e5e6025-92a6-4f1e-a168-31aa1695d3af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31935',
  'x-ms-correlation-request-id': '02d035e2-7619-4d8a-9584-c2e7e45187dd',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090759Z:02d035e2-7619-4d8a-9584-c2e7e45187dd',
  date: 'Mon, 27 Apr 2015 09:07:59 GMT',
  connection: 'close' });
 return result; }]];