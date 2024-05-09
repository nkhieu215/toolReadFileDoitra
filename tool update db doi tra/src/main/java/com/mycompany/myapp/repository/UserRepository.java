package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the {@link User} entity.
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findOneByLogin(String login);

    @EntityGraph(attributePaths = "authorities")
    Optional<User> findOneWithAuthoritiesByLogin(String login);

    Page<User> findAllByIdNotNullAndActivatedIsTrue(Pageable pageable);
    @Query(value = "insert into `phan_tich_san_pham` " +
        "(id,so_thu_tu,ten_nhan_vien_phan_tich, the_loai_phan_tich,lot_number,so_luong, username,ngay_kiem_tra, nam_san_xuat, trang_thai,phan_loai_chi_tiet_tiep_nhan_id) " +
        "values(?1,?2,?3,?4,?5,?6,'admin',null,?7,?8,?9); ",nativeQuery = true)
    public String insert (Integer id,
                          Integer stt,
                          String tenNhanVienPhanTich,
                          String theLoaiPhanTich,
                          String lotNumber,
                          Integer soLuong,
                          String namSanXuat,
                          String trangThai,
                          Integer phanLoaiId);
    @Query(value = "insert into `phan_tich_loi` " +
        "(id, so_luong,ngay_phan_tich ,username, loi_id, phan_tich_san_pham_id) " +
        "values(?1,?2,null,?3,?4,?5)",nativeQuery = true)
    public void insertDetail(Integer id,
                             Integer soLuong,
                             String username,
                             Integer idLoi,
                             Integer phanTichId);
}
