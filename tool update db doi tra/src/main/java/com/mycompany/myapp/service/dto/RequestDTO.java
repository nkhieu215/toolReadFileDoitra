package com.mycompany.myapp.service.dto;

public class RequestDTO {
    private Integer id;
    private Integer stt;
    private String tenNhanVienPhanTich;
    private String theLoaiPhanTich;
    private String lotNumber;
    private Integer soLuong ;
    private String namSanXuat;
    private String trangThai;
    private  Integer phanLoaiId ;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStt() {
        return stt;
    }

    public void setStt(Integer stt) {
        this.stt = stt;
    }

    public String getTenNhanVienPhanTich() {
        return tenNhanVienPhanTich;
    }

    public void setTenNhanVienPhanTich(String tenNhanVienPhanTich) {
        this.tenNhanVienPhanTich = tenNhanVienPhanTich;
    }

    public String getTheLoaiPhanTich() {
        return theLoaiPhanTich;
    }

    public void setTheLoaiPhanTich(String theLoaiPhanTich) {
        this.theLoaiPhanTich = theLoaiPhanTich;
    }

    public String getLotNumber() {
        return lotNumber;
    }

    public void setLotNumber(String lotNumber) {
        this.lotNumber = lotNumber;
    }

    public Integer getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public String getNamSanXuat() {
        return namSanXuat;
    }

    public void setNamSanXuat(String namSanXuat) {
        this.namSanXuat = namSanXuat;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }

    public Integer getPhanLoaiId() {
        return phanLoaiId;
    }

    public void setPhanLoaiId(Integer phanLoaiId) {
        this.phanLoaiId = phanLoaiId;
    }
}
