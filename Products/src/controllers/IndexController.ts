import { Request, Response } from 'express';

class IndexController{
     public static Index = (req: Request , res:Response  , next: any)=>{
         res.render('main')
     }
}

export default IndexController;