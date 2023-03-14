import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


export class GetSchemaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectionID" })
  connectionID: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespace" })
  namespace: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tableName" })
  tableName: string;
}

export class GetSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSchemaQueryParams;
}

export class GetSchema200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Field })
  @Expose({ name: "schema" })
  @Type(() => shared.Field)
  schema?: shared.Field[];
}

export class GetSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getSchema200ApplicationJSONObject?: GetSchema200ApplicationJSON;
}