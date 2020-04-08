package mk.ukim.finki.wp.project.fitness.repository;

import mk.ukim.finki.wp.project.fitness.models.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JpaMemberRepository extends JpaRepository<Member, Integer> {
    @Query("select m from Member m " +
            "WHERE m.firstName like :term or m.lastName like :term")
    List<Member> searchMembers(@Param("term") String term);

}
