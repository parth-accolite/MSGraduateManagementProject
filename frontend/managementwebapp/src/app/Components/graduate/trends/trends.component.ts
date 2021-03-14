import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Graduate } from 'src/app/Entities/Graduate';
import { Institute } from 'src/app/Entities/Institute';
import { Location } from 'src/app/Entities/Location';
import { Skill } from 'src/app/Entities/Skill';
import { GraduateService } from 'src/app/Services/graduate.service';
import { InstituteService } from 'src/app/Services/institute.service';
import { LocationService } from 'src/app/Services/location.service';
import { SkillService } from 'src/app/Services/skill.service';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  instituteList: Institute[] = [];
  public instituteLabels: Label[] = [];
  public instituteType: ChartType = 'bar';
  public instituteData: ChartDataSets[] = [];

  locationList: Location[] = [];
  public locationLabels: Label[] = [];
  public locationType: ChartType = 'bar';
  public locationData: ChartDataSets[] = [];

  skillList: Skill[] = [];
  public skillLabels: Label[] = [];
  public skillType: ChartType = 'bar';
  public skillData: ChartDataSets[] = [];


  graduateList: Graduate[] = [];
  public graduateLabels: Label[] = [];
  public graduateType: ChartType = 'bar';
  public graduateData: ChartDataSets[] = [];


  constructor(private instituteService: InstituteService, private locationService: LocationService, private skillService: SkillService, private graduateService: GraduateService) { }

  ngOnInit(): void {
    this.instituteService.getAll().subscribe((resp) => {
      this.instituteList = resp;
      let dataSet: number[] = [];
      this.instituteList.forEach((ele) => {
        this.instituteLabels.push(ele.shortHand.toString());
        dataSet.push(ele.graduates?.length);
      })
      this.instituteData.push({
        data: dataSet,
        label: 'Number of Graduates'
      });
    })

    this.locationService.getAll().subscribe((resp) => {
      this.locationList = resp;
      let graduatesDataSet: number[] = [];
      let institutesDataSet: number[] = [];

      this.locationList.forEach((ele) => {
        console.log(ele);
        this.locationLabels.push(ele.city.toString());
        graduatesDataSet.push(ele.graduates.length)
        institutesDataSet.push(ele.institutes.length);
      })
      this.locationData.push({
        data: graduatesDataSet,
        label: 'Number of Graduates'
      });
      this.locationData.push({
        data: institutesDataSet,
        label: 'Number of Institutes'
      });
    })

    this.skillService.getAll().subscribe((resp) => {
      this.skillList = resp;
      let temp: number[] = [];
      this.skillList.forEach((ele) => {
        temp.push(0);
        this.skillLabels.push(ele.name.toString());
      })
      this.graduateService.getAll().subscribe((resp) => {
        this.graduateList = resp;
        this.graduateList.forEach((ele) => {
          ele.skills?.forEach((skillEle) => {
            for (let i = 0; i < this.skillList.length; i++) {
              if (i + 1 === (skillEle.id)) {
                temp[i] += 1;
              }
            }
          })
        })
        this.skillData.push({
          data: temp,
          label: "Number of Gradautes"
        })
      })
    })
  }


}
