import csv

with open('/home/amrit/Desktop/andjs/act.csv', 'rb') as f:
    reader = csv.reader(f)
    data_as_list = list(reader)

def group(lst, n):
    return zip(*[lst[i::n] for i in range(n)])

def matrixTranspose(lists):
   if not lists: return []
   return map(lambda *row: list(row), *lists)

d = data_as_list[1:]
map(lambda x: x.pop(0), d)
map(lambda x: x.pop(), d)
map(lambda x: group(x, 3), d)
y = _
t = matrixTranspose(y)
map(lambda x: list(sum(x, ())), t)
z = _

with open("/home/amrit/Desktop/andjs/output.csv", "wb") as f:
    writer = csv.writer(f)
    writer.writerows(z)