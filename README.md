# Fabra Typescript SDK

<div align="left">
   <p>Use the Fabra API to build customer-facing data warehouse integrations to let your customers start sending data to your application. Unblock your sales pipeline in days, not months.</p>
   <a href="https://github.com/fabra-io/typescript-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/fabra-io/typescript-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
   <a href="https://www.fabra.io/#Email-Hero"><img src="https://img.shields.io/static/v1?label=Docs&message=Sign Up&color=2ca47c&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @fabra/sdk
```

### Yarn

```bash
yarn add @fabra/sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetNamespacesRequest,
  GetNamespacesResponse
} from "@fabra/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Fabra } from "@fabra/sdk";
const sdk = new Fabra({
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
});

const req: GetNamespacesRequest = {
  queryParams: {
    connectionID: 548814,
  },
};

sdk.connection.getNamespaces(req).then((res: GetNamespacesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### connection

* `getNamespaces` - Get all namespaces
* `getSchema` - Get schema for table
* `getTables` - Get all tables

### destination

* `createDestination` - Create a new destination
* `getDestinations` - Get all destinations

### linkToken

* `createLinkToken` - Create a new link token

### object

* `createObject` - Create a new object
* `getObjects` - Get all objects

### source

* `createSource` - Create a new source
* `getSources` - Get all sources

### sync

* `createSync` - Create a new sync
* `getSyncs` - Get all syncs
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
