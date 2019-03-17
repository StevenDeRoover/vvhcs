import { Request, Response } from 'express';
import ActivitiesRepository from './Repositories/ActivitiesRepository'

export default async function  activitiesGet(req: Request, res: Response) {
    console.log("Getting activities");
    try {
        let activities;
        activities = await new ActivitiesRepository({
            spreadSheetId: "1pKgSrD2nPqn2eZYhbZRplnRQZ9aNhz872ADlOdnnZwA"
        }).getActivities();
        console.log("Got this as data.", activities);
        res.status(200).json(activities);
    }
    catch {
        
    }
    //res.status(200).send("Hallo daar");
}

// export function start(exports: any) {
    
// }
// start(exports);
exports.activities = activitiesGet;