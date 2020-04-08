package mk.ukim.finki.wp.project.fitness.service;

import mk.ukim.finki.wp.project.fitness.models.Member;
import org.springframework.data.domain.Page;

import java.util.List;

public interface MemberService {
    Member createMember(int memberId, String firstName, String lastName, String address, String phone, Integer lastPaymentId);

    Page<Member> getAllMembers(int page, int size);

    List<Member> searchMembers(String term);

    Member updateMember(int memberId, String firstName, String lastName, String address, String phone, Integer lastPaymentId);

    Member deleteMember(int memberId);

    Member getMember(int memberId);
}
