# Model
from model import *

# imports
import requests

class getData:
    def __init__(self) :
        # self.base_url = "http://localhost/4eve-sch-api/service/api/"
        self.base_url = "https://78eb-49-49-231-241.ngrok-free.app/api/"
        self.raw_schedules = []
        self.mostvisits = []
        self.mostvisitsInTH = []
        self.snsCount = []
        self.schTypeCount = []
        self.schCountAllType = []
        self.dataYears = []
        self.dataArtswithType = []

    def getSch(self, members):
        obj = {'nickname_list': members}
        response = requests.post(f"{self.base_url}sch", json=obj)

        if response.status_code == 200:
            data = response.json()

            for item in data['response']:
                raw_schedule = RawSchedule(
                    sch_id= item['sch_id'],
                    artlist_id= item['artlist_id'],
                    country_id= item['country_id'],
                    province_zone_id= item['province_zone_id'],
                    province_id= item['province_id'],
                    schedule_name= item['schedule_name'],
                    schedule_detail= item['schedule_detail'],
                    schedule_local= item['schedule_local'],
                    schedule_ch= item['schedule_ch'],
                    schedule_date_start= item['schedule_date_start'],
                    schedule_date_end= item['schedule_date_end'],
                    schedule_time_start= item['schedule_time_start'],
                    schedule_time_end= item['schedule_time_end'],
                    artlist_show_date= item['artlist_show_date'],
                    artlist_show_time= item['artlist_show_time'],
                    artlists_sch_note= item['artlists_sch_note'],
                    status= item['status'],
                    members= item['members'],
                    province_zone_name= item['province_zone_name'],
                    country_thai_name= item['country_thai_name'],
                    province_name_thai= item['province_name_thai'],
                    sns= item['sns'],
                    sch_type= item['sch_type'],
                )
                self.raw_schedules.append(raw_schedule)
            
            return self.raw_schedules
        else :
            return []
        
    def VisitInThai(self):
        response = requests.get(f"{self.base_url}sch/get-visitInthai")

        if response.status_code == 200:
            data = response.json()

            for item in data['response']:
                mostvisitsTH = mostVisitsInTHModel(
                    country_id= item['country_id'],
                    province_id= item['province_id'],
                    country_thai_name= item['country_thai_name'],
                    province_name_thai= item['province_name_thai'],
                    visit_count= item['visit_count']
                )

                self.mostvisitsInTH.append(mostvisitsTH)

            return self.mostvisitsInTH
        else :
            return []

    def getVisit(self):
        try:
            response = requests.get(f"{self.base_url}sch/get-visit")
            response.raise_for_status() 

            data = response.json()

            for item in data.get('response', []):
                mostvisits = mostVisitsModel(
                    country_thai_name=item.get('country_thai_name'),
                    country_count=item.get('country_count')
                )

                self.mostvisits.append(mostvisits)

            return self.mostvisits
        except requests.RequestException as e:
            print(f"Error fetching data: {e}")
            return []
        
    def getCountSNS(self):
        response = requests.get(f"{self.base_url}sch/get-countSNS")

        if response.status_code == 200:
            data = response.json()

            for item in data['response']:
                snscount = snsCountModel(
                    social_network_name= item['social_network_name'],
                    social_count= item['social_count']
                )

                self.snsCount.append(snscount)

            return self.snsCount
        else :
            return []
        
    def getCountSchType(self):
        response = requests.get(f"{self.base_url}sch/get-countSchType")

        if response.status_code == 200:
            data = response.json()

            for item in data['response']:
                schtypecount = schtypeCountModel(
                    sch_category_name= item['sch_category_name'],
                    sch_count= item['sch_count']
                )

                self.schTypeCount.append(schtypecount)

            return self.schTypeCount
        else :
            return []
    
    def getCountAllType(self):
        response = requests.get(f"{self.base_url}sch/get-countAllType")

        if response.status_code == 200:
            data = response.json()

            for item in data['response']:
                countalltype = schCountAllModel(
                    label= item['label'],
                    data_count= item['data_count']
                )

                self.schCountAllType.append(countalltype)

            return self.schCountAllType
        else :
            return []

    def getschYearType(self):

        response = requests.get(f"{self.base_url}sch/get-schYear")

        if response.status_code == 200:
            data = response.json()

            for item in data['response']:
                data_year = dataYearSchTypeModel(
                    sch_category_name= item['sch_category_name'],
                    total_records= item['total_records']
                )
                self.dataYears.append(data_year)
            
            return self.dataYears
        else :
            return []
        
    def getDataArtswithType(self, artlist_name, type_list) :
        obj = {
            'artlist_name': artlist_name, 
            'type_list': type_list
        }

        response = requests.post(f"{self.base_url}sch/get-dataWithType", json=obj)

        if response.status_code == 200:
            data = response.json()

            for item in data['response']:
                data_arts = DataArtswithTypeModel(
                    name_arts= item['name_arts'],
                    sch_category_name= item['sch_category_name'],
                    sch_type_count= item['sch_type_count']
                )
                self.dataArtswithType.append(data_arts)
            
            return self.dataArtswithType
        else :
            return []



            

