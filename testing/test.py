# import subprocess

# process = subprocess.Popen(
#             "go run ../*.go",
#             stdout=subprocess.PIPE,
#             stderr=subprocess.PIPE,
#             shell=True,
#             text=True,
#             universal_newlines=True
#         )

# for line in iter(process.stdout.readline, ''):
#         print(line, end='')

import sys

connections=int(sys.argv[2])
threads=sys.argv[4]
target=sys.argv[5]

import requests
import concurrent.futures
from concurrent.futures import ProcessPoolExecutor
from time import time
ress=[]
def Ping(counter):
    before=time()
    r=requests.get(target)
    if r.status_code==200:
        after=time()-before
        ress.append({"time":after,"response":r.text,"stat":r.status_code,"Counter":counter})
        

excoter=ProcessPoolExecutor(int(threads))
futures=[excoter.submit(Ping(i)) for i in range(0,connections)]
concurrent.futures.wait(futures)
excoter.shutdown(wait=True)
totaltime=0
avg=[]
for i in ress:
    avg.append(i["time"])
    totaltime+=i["time"]
total_test_time=totaltime
avarage_response_time=sum(avg)/len(avg)
total_res=ress[-1]["Counter"]
reqs_per_secs=total_res/total_test_time
print("\n Total Time:\n",total_test_time,"\n Avg Wait:\n",avarage_response_time,"\n Req/sec:\n",reqs_per_secs,"\n Total Reqs:\n",total_res)


