# Bai4:

# f=[1,1]

# for i in range(1000):
#     f.append(f[i]+f[i+1])


# for i in f:
#     print(i)



# Bài 5:


# n = int(input("N = "))

# info_list = [];

# def chuanhoa(ten):

#     result = ""

#     for i in range (len(ten)):
#         if i == 0 or ten[i-1] == " ":
#             result += ten[i].upper()
#         else:
#             result += ten[i]

    
#     return result    

# for i in range (n):
#     info = list() 
#     ten = chuanhoa(input("Nhập tên: "))

#     info.append(ten)
#     info.append(input("Diem Hoa = "))
#     info.append(input("Diem Toan = "))
#     info.append(input("Diem Tieng Anh = "))
#     print("====================")
#     info_list.append(info)


# for i in range ( n ):
#     for j in range (4):
#         print(info_list[i][j], end = "\t")
#     print("\n")


# Bai 6:

dayso_goc = list(input("Nhap day so : ").split())

dayso = [ int(i) for i in dayso_goc]

print(dayso)


print("Cac so co trong day so la :", set(dayso))


thongke = { so : dayso.count(so) for so in dayso}

print(thongke)

x = int( input("X = ") )

if x in dayso:
    print("So lan xuat hien :", thongke.get(x))
else:
    dayso.insert(0,x)
    print(dayso)