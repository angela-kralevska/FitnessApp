package mk.ukim.finki.wp.project.fitness.service.impl;

import mk.ukim.finki.wp.project.fitness.models.Member;
import mk.ukim.finki.wp.project.fitness.models.exceptions.InvalidMemberIdException;
import mk.ukim.finki.wp.project.fitness.repository.JpaMemberRepository;
import mk.ukim.finki.wp.project.fitness.service.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService {

    private final JpaMemberRepository memberRepository;

    public MemberServiceImpl(JpaMemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
    @Override
    public Member createMember(int memberId, String firstName, String lastName, String address, String phone, Integer lastPaymentId) {
        Member newMember = new Member(memberId, firstName, lastName, address, phone,lastPaymentId);
        return this.memberRepository.saveAndFlush(newMember);
    }

    @Override
    public Page<Member> getAllMembers(int page, int size) {
        return this.memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId")));
    }

    @Override
    public List<Member> searchMembers(String term) {
        return this.memberRepository.searchMembers(term);
    }


    @Override
    public Member updateMember(int memberId, String firstName, String lastName, String address, String phone, Integer lastPaymentId) {
        Optional<Member> optionalMember = this.memberRepository.findById(memberId);
        if(!optionalMember.isPresent()) {
            throw new InvalidMemberIdException();
        }
        Member updatedMember = optionalMember.get();
        updatedMember.setFirstName(firstName);
        updatedMember.setLastName(lastName);
        updatedMember.setAddress(address);
        updatedMember.setPhone(phone);
        updatedMember.setLastPaymentId(lastPaymentId);
        return this.memberRepository.save(updatedMember);
    }

    @Override
    public Member deleteMember(int memberId) {
        Member memberToDelete = this.memberRepository.findById(memberId).get();
        if(memberToDelete == null) {
            return null;
        }
        this.memberRepository.deleteById(memberId);
        return memberToDelete;
    }

    @Override
    public Member getMember(int memberId) {
        return this.memberRepository.findById(memberId).orElseThrow(InvalidMemberIdException::new);
    }

}
