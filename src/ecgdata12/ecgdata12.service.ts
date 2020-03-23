import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThan, InsertResult } from 'typeorm';
import { Ecgdata12 } from './ecgdata12.entity';
import { User } from '../users/user.entity';
import { UserService } from 'src/users/user.service';

@Injectable()
export class Ecgdata12Service {
  constructor(
    @InjectRepository(Ecgdata12)
    private readonly ecgdata12Repository: Repository<Ecgdata12>,
    private readonly userService: UserService
  ) { }
    
  async createEcgdata12(params): Promise<InsertResult> {
    return await this.ecgdata12Repository.createQueryBuilder()
      .insert()
      .into(Ecgdata12)
      .values(params)
      .execute();
  }

  async findEcgdata12ByUser(params) {
    // find all
    params.from=parseInt(params.from);

    if (!params.from && !params.limit && !params.to)
		
      return await this.ecgdata12Repository.find({user: { userId: params.id }});

    const query: any = {
      where: {  userId : params.id },
      order: { time: 'ASC' },
      };
    //  if (params.to) {
    //     query.where.time = Between(params.from, params.to);
    //   }
    //   else {
    //   query.where.time = MoreThan(params.from);

    //   //query.take = params.limit || 2304;
    //  }
  
 
  
  
  if (Boolean((await this.userService.getUserById(params.id)).userId ))

  var _get = await this.ecgdata12Repository.find(query);
      var cnt=0;
  var I: Ecgdata12[] = [];
  var II: Ecgdata12[] = [];
  var III: Ecgdata12[] = [];
  var V1: Ecgdata12[] = [];
  var V2: Ecgdata12[] = [];
  var V3: Ecgdata12[] = [];
  var V4: Ecgdata12[] = [];
  var V5: Ecgdata12[] = [];
  var V6: Ecgdata12[] = [];
  var aVR: Ecgdata12[] = [];
  var aVL: Ecgdata12[] = [];
  var aVF: Ecgdata12[] = [];
  _get.forEach(p=>
    {
      if (params.to) {
        if(p.time > params.from && p.time < params.to && cnt<255)
          {
          var tmp = new Ecgdata12[25];
          var tmp2 = new Ecgdata12[25];
          var tmp3 = new Ecgdata12[25];
          var tmp4 = new Ecgdata12[25];
          var tmp5 = new Ecgdata12[25];
          var tmp6 = new Ecgdata12[25];
          var tmp7 = new Ecgdata12[25];
          var tmp8 = new Ecgdata12[25];
          var tmp9 = new Ecgdata12[25];
          var tmp10 = new Ecgdata12[25];
          var tmp11 = new Ecgdata12[25];
          var tmp12 = new Ecgdata12[25];
          tmp.userId = p.userId;
          tmp.time=p.time;
          I.push(tmp);
          tmp.I=p.I;
          tmp.II=p.II;
          tmp.III=p.III;
          tmp.V1 = p.V1;
          tmp.V2 = p.V2;
          tmp.V3 = p.V3;
          tmp.V4 = p.V4;
          tmp.V5 = p.V5;
          tmp.V6 = p.V6;
          tmp.aVR = p.aVR;
          tmp.aVL = p.aVL;
          tmp.aVF = p.aVF;
          cnt++;
        }
      }
      else {
        if(p.time > params.from && cnt<255)
          {
            cnt++;
            var tmp = [];
            var tmp2 = [];
            var tmp3 = [];
            var tmp4 = [];
            var tmp5 = [];
            var tmp6 = [];
            var tmp7 = [];
            var tmp8 = [];
            var tmp9 = [];
            var tmp10 = [];
            var tmp11 = [];
            var tmp12 = [];
            tmp.push(p.I);
            tmp.push(p.time);
            I.push(tmp);
            tmp2.push(p.II);
            tmp2.push(p.time);
            II.push(tmp2);
            tmp3.push(p.III);
            tmp3.push(p.time);
            III.push(tmp3);
            tmp4.push(p.V1);
            tmp4.push(p.time);
            V1.push(tmp4);
            tmp5.push(p.V2);
            tmp5.push(p.time);
            V2.push(tmp5);
            tmp6.push(p.V3);
            tmp6.push(p.time);
            V3.push(tmp6);
            tmp7.push(p.V4);
            tmp7.push(p.time);
            V4.push(tmp7);
            tmp8.push(p.V5);
            tmp8.push(p.time);
            V5.push(tmp8);
            tmp9.push(p.V6);
            tmp9.push(p.time);
            V6.push(tmp9);
            tmp10.push(p.aVR);
            tmp10.push(p.time);
            aVR.push(tmp10);
            tmp11.push(p.aVL);
            tmp11.push(p.time);
            aVL.push(tmp11);
            tmp12.push(p.aVF);
            tmp12.push(p.time);
            aVF.push(tmp12);
        }
    }
    });
    
    var kk={
      'I':I,
      'II':II,
      'III':III,
      'V1':V1,
      'V2':V2,
      'V3':V3,
      'V4':V4,
      'V5':V5,
      'V6':V6,
      'aVR':aVR,
      'aVL':aVL,
      'aVF':aVF,
      'userId':params.userId,
    };
    return kk;
  }

  async deleteEcgdata12ByUser(user){
    return await this.ecgdata12Repository.delete({user});
  }
}