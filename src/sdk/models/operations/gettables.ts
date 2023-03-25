/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GetTablesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=connectionID",
  })
  connectionID: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=namespace",
  })
  namespace: string;
}

export class GetTablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTablesQueryParams;
}

/**
 * Successfully fetched tables
 */
export class GetTables200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "tables" })
  tables?: string[];
}

export class GetTablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successfully fetched tables
   */
  @SpeakeasyMetadata()
  getTables200ApplicationJSONObject?: GetTables200ApplicationJSON;
}
