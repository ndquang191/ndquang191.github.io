#include<iostream>
#include<cstring>

using namespace std;

struct sinhVien{
	
	string ten;
	string ho;
	int namsinh;
	bool gioitinh;
	
	sinhVien *next;
};

typedef sinhVien* list;

void them(list *l ){
		
	sinhVien  *sv;
	sv = new sinhVien;
	fflush(stdin);
	//cout << "Ho SV la: " ; getline(cin, sv->ho);
	cout << "Ten SV la: " ; getline(cin, sv->ten);
	//cout << "Nam sinh SV la: " ; cin >> sv->namsinh;
	//cout << "Gioi tinh SV la : (Nam: 1   Nu: 0) : " ; cin >> sv->gioitinh;
		
	sv->next = *l;
	*l = sv;
}

void themsinhvien( list *l ){
	int n ;
	cout << "Co bao nhieu sinh vien : ";  cin >> n;
	for(int i = 0 ; i < n ; i++){
		them( l);
	}
}

void insinhvien(list *l){
	
	sinhVien *sv;
	sv = new sinhVien;
	sv = *l;
	
	while( sv!=NULL){
		cout << "Ho ten sinh vien la: " << sv->ho << " " << sv->ten << endl;
	//	if( sv->gioitinh == true){
	//		cout << "Gioi tinh: nam" << endl;
	//	} 
	//	else
	//		cout << "Gioi tinh: nu" << endl;
			
		sv = sv->next;	
	}
}

int timsinhvien(list *l){
	
	string tnt;
	fflush(stdin);
	cout << "Ban muon tim ten ai ? : "  ; getline(cin, tnt);

	sinhVien *sv;
	sv = new sinhVien;
	
	sv = *l;
	int vitri = 0;
	while( sv!=NULL){
		
		vitri++;
		if( sv->ten == tnt){
			return vitri;
		}
		sv = sv->next;
	}
	
	return 0;
}


void sapxep(list *l){
	
	sinhVien *sv1;
	sv1 = new sinhVien;
	sv1 = *l;
	

	
	while( sv1 != NULL){
		sinhVien *sv2 = sv1->next;
		
		while( sv2!=NULL){
			if( sv2->ten <= sv1->ten){
				sinhVien* temp = sv2;
				sv2 = sv1;
				sv1 = temp;
				
				cout << "Da doi" << endl;
			}
			sv2 = sv2->next;
		}
		sv1=sv1->next;
		
		cout << "Sang thang tiep theo nao"  << endl;
	}
	
	
}
int main(){
	
	list L = NULL;
	
	themsinhvien(&L);  
	
	insinhvien(&L);
	
	sapxep(&L);
	cout << "Sau khi sapp xep" << endl;
	insinhvien(&L);
	//cout << "So thu tu cua sinh vien can tim la: " << timsinhvien(&L);
}