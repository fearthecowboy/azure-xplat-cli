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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'b73648cd-b515-4143-8fde-5548bb5f9f39',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '8bd3d292-f5f0-4f3e-9241-c972a62420a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121553Z:8bd3d292-f5f0-4f3e-9241-c972a62420a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '391',
  'content-type': 'application/json; charset=utf-8',
  etag: '53945d2d-4f2d-4d91-8dd3-b16ebe9fafb7',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'b73648cd-b515-4143-8fde-5548bb5f9f39',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '8bd3d292-f5f0-4f3e-9241-c972a62420a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121553Z:8bd3d292-f5f0-4f3e-9241-c972a62420a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"7a1fffaf-f7ec-4151-a311-e22fadc0f29a\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-txt.example1.com\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: '7a1fffaf-f7ec-4151-a311-e22fadc0f29a',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'a6a44f88-6fab-4a29-8e6b-f990771d735a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '8e818c38-6f08-4c7f-8951-c4e6260c777f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121554Z:8e818c38-6f08-4c7f-8951-c4e6260c777f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"7a1fffaf-f7ec-4151-a311-e22fadc0f29a\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"fqdn\":\"set-txt.example1.com\",\"TTL\":3600}}", { 'cache-control': 'private',
  'content-length': '394',
  'content-type': 'application/json; charset=utf-8',
  etag: '7a1fffaf-f7ec-4151-a311-e22fadc0f29a',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'a6a44f88-6fab-4a29-8e6b-f990771d735a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '8e818c38-6f08-4c7f-8951-c4e6260c777f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121554Z:8e818c38-6f08-4c7f-8951-c4e6260c777f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"b7e1d5eb-89ba-4b34-8ade-fa14ad1d4c06\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600,\"TXTRecords\":[{\"value\":\"longtexthere\"}]}}", { 'cache-control': 'private',
  'content-length': '404',
  'content-type': 'application/json; charset=utf-8',
  etag: 'b7e1d5eb-89ba-4b34-8ade-fa14ad1d4c06',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '892a54d6-c15a-4379-9a4b-a50ab3451aa1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7ed3da17-9e88-49e3-b511-036e9d2e78fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121556Z:7ed3da17-9e88-49e3-b511-036e9d2e78fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2015-05-04-preview', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"b7e1d5eb-89ba-4b34-8ade-fa14ad1d4c06\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"TTL\":3600,\"TXTRecords\":[{\"value\":\"longtexthere\"}]}}", { 'cache-control': 'private',
  'content-length': '404',
  'content-type': 'application/json; charset=utf-8',
  etag: 'b7e1d5eb-89ba-4b34-8ade-fa14ad1d4c06',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '892a54d6-c15a-4379-9a4b-a50ab3451aa1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '7ed3da17-9e88-49e3-b511-036e9d2e78fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121556Z:7ed3da17-9e88-49e3-b511-036e9d2e78fb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:56 GMT',
  connection: 'close' });
 return result; }]];