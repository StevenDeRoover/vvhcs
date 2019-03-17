import BasePropsClass from "../Common/BasePropsClass";
import { google } from 'googleapis';
import * as credentials from '../../private/credentials.json';
import * as apikey from '../../private/api_key.json';
import { JWT } from "google-auth-library";

export default class SpreadsheetRepository extends BasePropsClass<{ spreadsheetId: string }>{
    public constructor(props) {
        super(props);
    }

    public async get(): Promise<[string[]]> {
        var jwt = this.getJwt();
        var apiKey = this.getApiKey();
        var spreadsheetId = this.props.spreadsheetId;
        var range = 'Activiteiten';
        const sheets = google.sheets({ version: "v4"});
        console.log("Google API - Get sheets values - SpreadSheetId", this.props.spreadsheetId);
        let data: any = await sheets.spreadsheets.values.get({
            auth: jwt,
            key: apiKey, 
            range: range,
            spreadsheetId: this.props.spreadsheetId,
        });
        console.log("SpreadSheet repository got this as data", data.data.values);
        return data.data.values as [[]];
    }

    public append(row) {

    }

    private getJwt(): JWT {
        const { client_email, private_key } = <any>credentials;
        return new google.auth.JWT(
            client_email, null, private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );
    }

    public getApiKey() {
        const { key } = <any>apikey;
        return key;
    }
}