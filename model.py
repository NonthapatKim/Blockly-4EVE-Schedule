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
    def __init__(self, country_id, province_id, country_thai_name, province_name_thai, visit_count) :
        self.country_id = country_id
        self.province_id = province_id
        self.country_thai_name = country_thai_name
        self.province_name_thai = province_name_thai
        self.visit_count = visit_count

class mostVisitsModel:
    def __init__(self, country_thai_name, country_count) :
        self.country_thai_name = country_thai_name
        self.country_count = country_count

class snsCountModel:
    def __init__(self, social_network_name, social_count) :
        self.social_network_name = social_network_name
        self.social_count = social_count

class schtypeCountModel:
    def __init__(self, sch_category_name, sch_count) :
        self.sch_category_name = sch_category_name
        self.sch_count = sch_count

class schCountAllModel:
    def __init__(self, label, data_count) :
        self.label = label
        self.data_count = data_count

class dataYearSchTypeModel:
    def __init__(self, sch_category_name, total_records) :
        self.sch_category_name = sch_category_name
        self.total_records = total_records

class DataArtswithTypeModel:
    def __init__(self, name_arts, sch_category_name, sch_type_count) :
        self.name_arts = name_arts
        self.sch_category_name = sch_category_name
        self.sch_type_count = sch_type_count