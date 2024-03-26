from schedules import * 
import pygal

data = getData()

dataVisit = data.getVisit()
dataVisitInThai = data.VisitInThai()

dataSNSCount = data.getCountSNS()

dataSchTypeCount = data.getCountSchType()
dataAllSchTypeCount = data.getCountAllType()

dataYears = data.getschYearType()
dataArtswithType = data.getDataArtswithType("Fai", ["โชว์", "รายการออนไลน์"])

# for value in dataVisitInThai:
#     chart.x_labels = value.province_name_thai

### visitInthai ###

chart = pygal.Bar()
chart.title = '4EVE ไปแสดงที่ไหนในไทยมาแล้วบ้าง?'

for item in dataVisitInThai:
    chart.add(item.province_name_thai, item.visit_count)

# chart.render_to_file('chart.svg')

### visit-Aroundtheword ###

# chart = pygal.HorizontalBar()
# chart.title = '4EVE ไปแสดงที่ไหนมาแล้วบ้างจากทั่วโลก?'

# for item in dataVisit:
#     chart.add(item.country_thai_name, item.country_count)

# chart.render_to_file('chart-2.svg')

### SNS-Count (Pie) ###

# chart = pygal.Pie()
# chart.title = '4EVE ไปท่องโลกในแพลตฟอร์มไหนมาบ้าง?'

# for item in dataSNSCount:
#     chart.add(item.social_network_name, item.social_count)

# chart.render_to_file('chart-3.svg')

### SNS-Count (Hori-Bar) ###

# chart = pygal.HorizontalBar()
# chart.title = '4EVE ทำทุกรูปแบบ!'

# for item in dataSchTypeCount:
#     chart.add(item.sch_category_name, item.sch_count)

# chart.render_to_file('chart-4.svg')

### All-Count-Type (Bar) ###

# chart = pygal.Bar()
# chart.title = 'สถิติประเภทการออกงานทั้งหมดของ 4EVE'

# for item in dataAllSchTypeCount:
#     chart.add(item.label, item.data_count)

# chart.render_to_file('chart-5.svg')

### Data-Month (Line) ###

# chart = pygal.HorizontalLine()
# chart.title = 'สถิติงานทั้งหมดของ 4EVE'

# chart.x_labels = map(str, range(2020, 2025))

# for item in dataYears:
#     total_records_array = [int(x) for x in item.total_records.split(",")]
#     chart.add(item.sch_category_name, total_records_array)

# chart.render_to_file('chart-6.svg')

### Data-Month (Line) ###

# chart = pygal.HorizontalBar()
# chart.title = 'สถิติงานของฝ้าย 4EVE'

# for item in dataArtswithType:
#     chart.add(item.sch_category_name, item.sch_type_count)

# chart.render_to_file('chart-7.svg')





