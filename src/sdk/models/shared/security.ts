import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SchemeAPIKeyAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-API-Key" })
  apiKey: string;
}

export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: SchemeAPIKeyAuth;
}