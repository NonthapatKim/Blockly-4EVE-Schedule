import requests
import webbrowser

class RawSchedule: 
    def __init__(self, sch_id, artlist_id, country_id, province_zone_id, province_id, schedule_name, schedule_detail, schedule_local, schedule_ch, schedule_date_start, schedule_date_end, schedule_time_start, schedule_time_end, artlist_show_date, artlist_show_time, artlists_sch_note, status, members, province_zone_name, country_thai_name, province_name_thai, sns, sch_type) :
        self.sch_id = sch_id
        self.artlist_id = artlist_id
        self.country_id = country_id
        self.province_zone_id = province_zone_id
        self.province_id = province_id
        self.schedule_name = schedule_name
        self.schedule_detail = schedule_detail
        self.schedule_local = schedule_local
        self.schedule_ch = schedule_ch
        self.schedule_date_start = schedule_date_start
        self.schedule_date_end = schedule_date_end
        self.schedule_time_start = schedule_time_start
        self.schedule_time_end = schedule_time_end
        self.artlist_show_date = artlist_show_date
        self.artlist_show_time = artlist_show_time
        self.artlists_sch_note = artlists_sch_note
        self.status = status
        self.members = members
        self.province_zone_name = province_zone_name
        self.country_thai_name = country_thai_name
        self.province_name_thai = province_name_thai
        self.sns = sns
        self.sch_type = sch_type

class mostVisitsInTHModel:
    def __init__(self, country_id, province_id, country_thai_name, visit_count) :
        self.country_id = country_id
        self.province_id = province_id
        self.country_thai_name = country_thai_name
        self.visit_count = visit_count

class getSch:
    def __init__(self) :
        self.base_url = "http://localhost/4eve-sch-api/service/api/"
        self.raw_schedules = []
        self.mostvisitsInTH = []

    def getData(self, members):
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
                    visit_count= item['visit_count']
                )

                self.mostvisitsInTH.append(mostvisitsTH)

            return self.mostvisitsInTH
        else :
            return []
    

    def openlink(self):
        webbrowser.open('https://youtu.be/sFUvyBAUxBU?si=K1nGjVhnQin4583q')




            

