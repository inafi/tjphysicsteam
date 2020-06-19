import glob
import os
result = []
PATH = "/Users/nafi/Develop/GitHub/tjphysicsteam/Lectures/PPP/"
for x in os.walk(PATH):
    for y in glob.glob(os.path.join(x[0], '*.pdf')):
        result.append(y.split("/")[-1])

fout = open("dir.txt", "w")

for i in result:
    fout.write(i + "\n")