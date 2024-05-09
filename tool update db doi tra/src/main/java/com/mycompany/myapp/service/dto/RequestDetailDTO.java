package com.mycompany.myapp.service.dto;

public class RequestDetailDTO {
    private Integer id;
    private Integer soLuong;
    private String username;
    private Integer idLoi;
    private Integer phanTichId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getIdLoi() {
        return idLoi;
    }

    public void setIdLoi(Integer idLoi) {
        this.idLoi = idLoi;
    }

    public Integer getPhanTichId() {
        return phanTichId;
    }

    public void setPhanTichId(Integer phanTichId) {
        this.phanTichId = phanTichId;
    }
}
