import BasePropsClass from "../Common/BasePropsClass";
import SpreadsheetRepository from "./SpreadsheetRepository";
import Activity from "../Models/Activity";

export default class ActivitiesRepository extends BasePropsClass<{ spreadSheetId?: string }>{
    private _spreadsheetRepository: SpreadsheetRepository;

    public constructor(props) {
        super(props);
        let spreadSheetId = this.props.spreadSheetId;
        console.log("Geting activities from spreadsheetrepository", spreadSheetId);
        this._spreadsheetRepository = new SpreadsheetRepository({
            spreadsheetId: this.props.spreadSheetId
        });

    }

    public async getActivities(): Promise<Activity[]> {
        let activities: Activity[] = [];
        try {
            let results = await this._spreadsheetRepository.get();
            results.shift();
            if (results.length >= 1) {
                activities = results.map(result => (<Activity>{
                    Date: result[0],
                    Name: result[1],
                    StartTime: result[2],
                    SubscriptionType: result[3]
                }));
            }

            console.log("Activities from spread sheet repository", activities);
        }
        catch (ex) {
            console.log("Getting data error", ex);
        }
        return activities;
    }
}