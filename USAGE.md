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
  }
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