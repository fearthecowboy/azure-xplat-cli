// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca"',
  'x-ms-request-id': '0b7e56e6-2e35-4056-bb78-7fc420b4e424',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '6b433042-75ec-4f05-a796-0f05fee19428',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T091027Z:6b433042-75ec-4f05-a796-0f05fee19428',
  date: 'Tue, 16 Feb 2016 09:10:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route-table\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table\",\r\n  \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5d7f8ac8-9ab7-4216-8706-87a8f547ae23\",\r\n    \"routes\": [\r\n      {\r\n        \"name\": \"test-route\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n        \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"addressPrefix\": \"12.0.0.0/8\",\r\n          \"nextHopType\": \"VirtualAppliance\",\r\n          \"nextHopIpAddress\": \"10.0.0.7\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '988',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca"',
  'x-ms-request-id': '0b7e56e6-2e35-4056-bb78-7fc420b4e424',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '6b433042-75ec-4f05-a796-0f05fee19428',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T091027Z:6b433042-75ec-4f05-a796-0f05fee19428',
  date: 'Tue, 16 Feb 2016 09:10:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"12.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualAppliance\",\r\n    \"nextHopIpAddress\": \"10.0.0.7\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '445',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca"',
  'x-ms-request-id': '7c8f2cd7-4cef-40b3-8020-dd82060c42df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8f0ec100-4175-4513-88f7-21efdb62ca71',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T091028Z:8f0ec100-4175-4513-88f7-21efdb62ca71',
  date: 'Tue, 16 Feb 2016 09:10:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-route\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route-table-routes/providers/Microsoft.Network/routeTables/test-route-table/routes/test-route\",\r\n  \"etag\": \"W/\\\"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"12.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualAppliance\",\r\n    \"nextHopIpAddress\": \"10.0.0.7\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '445',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c5cdc358-d9fa-43e4-83fa-132c6b1b4dca"',
  'x-ms-request-id': '7c8f2cd7-4cef-40b3-8020-dd82060c42df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '8f0ec100-4175-4513-88f7-21efdb62ca71',
  'x-ms-routing-request-id': 'WESTEUROPE:20160216T091028Z:8f0ec100-4175-4513-88f7-21efdb62ca71',
  date: 'Tue, 16 Feb 2016 09:10:28 GMT',
  connection: 'close' });
 return result; }]];