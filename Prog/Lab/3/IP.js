const startIP = "127.0.0.1";
const IP= [];

let temp = "";

for(i in startIP) {
    if(startIP[i] != ".") temp += startIP[i];
    else {
        IP.push(Number(temp));
        temp = ""
    }
}
IP.push(Number(temp));

IP[0] = IP[0] << 8 << 8 << 8;
IP[1] = IP[1] << 8 << 8;
IP[2] = IP[2] << 8;

console.log(IP[0] + IP[1] + IP[2] + IP[3]);
